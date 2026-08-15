import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react"

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
      setErrorMessage("Could not load saved avatar. Using the default instead.")
    }
  }, [])

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
      setErrorMessage("Please choose an image file (JPG, PNG, WebP, etc.)")
      return
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setErrorMessage(`Image must be ${MAX_FILE_SIZE_MB}MB or smaller`)
      return
    }

    setIsUploading(true)

    try {
      const dataUrl = await readFileAsDataUrl(file)
      localStorage.setItem(AVATAR_STORAGE_KEY, dataUrl)
      setAvatarSrc(dataUrl)
    } catch {
      setErrorMessage("Upload failed. Please try again.")
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <div
          className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400 via-sky-300 to-violet-400 opacity-80 blur-[2px]"
          aria-hidden="true"
        />

        <div className="relative rounded-full bg-gradient-to-br from-cyan-400 via-sky-300 to-violet-400 p-[3px]">
          <button
            type="button"
            className="group relative block overflow-hidden rounded-full focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none"
            onClick={handleOpenFilePicker}
            onKeyDown={handleKeyDown}
            aria-label="Upload or change avatar"
            tabIndex={0}
            disabled={isUploading}
          >
            <img
              src={avatarSrc}
              alt={alt}
              width={240}
              height={240}
              loading="lazy"
              className="h-44 w-44 rounded-full object-cover ring-4 ring-[#0a0a0a] sm:h-56 sm:w-56"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]/70 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              {isUploading ? "Uploading…" : "Upload Avatar"}
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
        aria-label="Choose avatar image"
      />

      {errorMessage ? (
        <p className="max-w-[16rem] text-center text-xs text-rose-400" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </div>
  )
}

export default AvatarUpload
