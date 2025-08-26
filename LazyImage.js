import Image from 'next/image'

export default function LazyImage({ src, alt, ...props }) {
  return (
    <Image
      src={src}
      alt={alt}
      loading="lazy"
      placeholder="empty"
      {...props}
    />
  )
}