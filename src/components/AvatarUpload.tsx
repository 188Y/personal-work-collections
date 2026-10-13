import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react"
import { useLanguage } from "../i18n/LanguageContext"
import { ui } from "../i18n/ui"

const AVATAR_STORAGE_KEY = "portfolio-avatar"
const DEFAULT_AVATAR = "/avatar.svg"
const MAX_FILE_SIZE_MB = 2
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024

type AvatarUploadProps = {
  alt: string
}

/** Read an image file as a data URL */
const readFileAsDataUrl = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      if (typeof reader.result !== "string") {
        reject(new Error("Failed to read image file"))
        return
      }

      resolve(reader.result)
    }

    reader.onerror = () => {
      reject(new Error("Failed to read image file"))
    }

    reader.readAsDataURL(file)
  })
}

/** Circular avatar with local file upload and localStorage persistence */
const AvatarUpload = ({ alt }: AvatarUploadProps) => {
  const { t } = useLanguage()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [avatarSrc, setAvatarSrc] = useState(DEFAULT_AVATAR)
  const [errorMessage, setErrorMessage] = useState("")
  const [isUploading, setIsUploading] = useState(false)

  useEffect(() => {
    try {
      const savedAvatar = localStorage.getItem(AVATAR_STORAGE_KEY)
      if (!savedAvatar) return
      setAvatarSrc(savedAvatar)
    } catch {
      setErrorMessage(t(ui.avatarLoadError))
    }
  }, [t])

  const handleOpenFilePicker = () => {
    fileInputRef.current?.click()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return
    event.preventDefault()
    handleOpenFilePicker()
  }

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setErrorMessage("")

    if (!file.type.startsWith("image/")) {
      setErrorMessage(t(ui.avatarTypeError))
      return
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setErrorMessage(t(ui.avatarSizeError))
      return
    }

    setIsUploading(true)

    try {
      const dataUrl = await readFileAsDataUrl(file)
      localStorage.setItem(AVATAR_STORAGE_KEY, dataUrl)
      setAvatarSrc(dataUrl)
    } catch {
      setErrorMessage(t(ui.avatarUploadError))
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-3">
      {/* A single-hairline ring keeps the avatar quiet on a neutral page */}
      <div className="relative rounded-full bg-white/15 p-px">
        <div className="rounded-full bg-canvas p-[7px]">
          <button
            type="button"
            className="group relative block overflow-hidden rounded-full focus-visible:ring-2 focus-visible:ring-ink-3 focus-visible:outline-none"
            onClick={handleOpenFilePicker}
            onKeyDown={handleKeyDown}
            aria-label={t(ui.changeAvatar)}
            tabIndex={0}
            disabled={isUploading}
          >
            <img
              src={avatarSrc}
              alt={alt}
              width={240}
              height={240}
              loading="lazy"
              className="h-40 w-40 rounded-full object-cover sm:h-48 sm:w-48 md:h-56 md:w-56"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-canvas/75 font-mono text-xs tracking-[0.14em] text-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
              {isUploading ? t(ui.uploading) : t(ui.uploadAvatar)}
            </span>
          </button>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={handleFileChange}
        aria-label={t(ui.chooseAvatarImage)}
      />

      {errorMessage ? (
        <p
          className="max-w-[16rem] text-center text-xs text-rose-300"
          role="alert"
        >
          {errorMessage}
        </p>
      ) : null}
    </div>
  )
}

export default AvatarUpload
