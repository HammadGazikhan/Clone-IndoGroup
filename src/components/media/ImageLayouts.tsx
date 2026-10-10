type ObjectPosition =
  | 'center'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'center-top'
  | 'center-bottom'

const positionMap: Record<ObjectPosition, string> = {
  center: 'object-center',
  top: 'object-top',
  bottom: 'object-bottom',
  left: 'object-left',
  right: 'object-right',
  'center-top': 'object-[center_20%]',
  'center-bottom': 'object-[center_80%]',
}

interface ImageFrameProps {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  aspect?: string
  position?: ObjectPosition
  loading?: 'lazy' | 'eager'
  hover?: boolean
}

export function ImageFrame({
  src,
  alt,
  className = '',
  imgClassName = '',
  aspect,
  position = 'center',
  loading = 'lazy',
  hover = true,
}: ImageFrameProps) {
  return (
    <div
      className={`overflow-hidden bg-ink/5 ${aspect ?? ''} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`h-full w-full object-cover ${positionMap[position]} ${
          hover ? 'transition duration-700 ease-out group-hover:scale-[1.03]' : ''
        } ${imgClassName}`}
      />
    </div>
  )
}

/** Hero: one dominant image + one offset accent */
export function HeroImagePair({
  primary,
  secondary,
  primaryAlt = '',
  secondaryAlt = '',
}: {
  primary: string
  secondary: string
  primaryAlt?: string
  secondaryAlt?: string
}) {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div className="group aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-ink/20 md:aspect-[3/4] lg:aspect-[4/5]">
        <ImageFrame
          src={primary}
          alt={primaryAlt}
          position="center-top"
          loading="eager"
          className="h-full"
        />
      </div>
      <div className="group absolute bottom-4 -left-4 w-[45%] overflow-hidden rounded-2xl border-4 border-paper shadow-xl md:bottom-6 md:-left-8 md:w-[42%] lg:-left-10">
        <ImageFrame
          src={secondary}
          alt={secondaryAlt}
          aspect="aspect-[4/3]"
          position="center"
          loading="eager"
        />
      </div>
      <div className="absolute -right-2 top-8 hidden h-24 w-24 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-sm lg:block" />
    </div>
  )
}

/** Editorial bento for 3–4 images */
export function BentoGallery({
  images,
  altPrefix = 'Indo Group',
}: {
  images: string[]
  altPrefix?: string
}) {
  const [a, b, c, d] = images

  return (
    <div className="grid w-full min-w-0 grid-cols-2 gap-3 md:grid-cols-12 md:grid-rows-6 md:gap-4">
      {a && (
        <div className="group col-span-2 min-w-0 overflow-hidden rounded-2xl md:col-span-7 md:row-span-4">
          <ImageFrame
            src={a}
            alt={`${altPrefix} project`}
            aspect="aspect-[16/10] w-full md:aspect-auto md:h-full md:min-h-[220px]"
            position="center-top"
          />
        </div>
      )}
      {b && (
        <div className="group min-w-0 overflow-hidden rounded-2xl md:col-span-5 md:col-start-8 md:row-span-2">
          <ImageFrame
            src={b}
            alt={`${altPrefix} detail`}
            aspect="aspect-square w-full md:aspect-auto md:h-full"
            position="center"
          />
        </div>
      )}
      {c && (
        <div className="group min-w-0 overflow-hidden rounded-2xl md:col-span-5 md:col-start-8 md:row-span-2 md:row-start-3">
          <ImageFrame
            src={c}
            alt={`${altPrefix} work`}
            aspect="aspect-square w-full md:aspect-auto md:h-full"
            position="center-top"
          />
        </div>
      )}
      {d && (
        <div className="group col-span-2 min-w-0 overflow-hidden rounded-2xl md:col-span-7 md:row-span-2 md:row-start-5">
          <ImageFrame
            src={d}
            alt={`${altPrefix} site`}
            aspect="aspect-[21/9] w-full md:h-full"
            position="center"
          />
        </div>
      )}
    </div>
  )
}

/** Vertical split: tall main + two stacked side images */
export function SplitImageStack({
  main,
  top,
  bottom,
  title,
}: {
  main: string
  top: string
  bottom: string
  title: string
}) {
  return (
    <div className="grid gap-3 md:grid-cols-[1.15fr_0.85fr] md:gap-4">
      <div className="group overflow-hidden rounded-2xl md:min-h-[420px]">
        <ImageFrame
          src={main}
          alt={title}
          aspect="aspect-[4/3] w-full md:aspect-auto md:h-full md:min-h-[280px]"
          position="center-top"
        />
      </div>
      <div className="grid grid-rows-2 gap-3 md:gap-4">
        <div className="group overflow-hidden rounded-2xl">
          <ImageFrame
            src={top}
            alt={`${title} detail`}
            aspect="aspect-[16/10] md:aspect-auto md:h-full"
            position="center"
          />
        </div>
        <div className="group overflow-hidden rounded-2xl">
          <ImageFrame
            src={bottom}
            alt={`${title} project`}
            aspect="aspect-[16/10] md:aspect-auto md:h-full"
            position="center-top"
          />
        </div>
      </div>
    </div>
  )
}

/** Horizontal filmstrip */
export function ImageFilmstrip({
  images,
  altPrefix = 'Gallery',
}: {
  images: string[]
  altPrefix?: string
}) {
  return (
    <div className="flex w-full min-w-0 gap-3 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {images.map((src, i) => (
        <div
          key={src}
          className="group w-[72vw] shrink-0 snap-center overflow-hidden rounded-2xl sm:w-[320px] md:w-[360px]"
        >
          <ImageFrame
            src={src}
            alt={`${altPrefix} ${i + 1}`}
            aspect="aspect-[3/4]"
            position={i % 2 === 0 ? 'center-top' : 'center'}
          />
        </div>
      ))}
    </div>
  )
}

/** Cards with image + gradient caption overlay */
export function OverlayFeatureGrid({
  items,
}: {
  items: { title: string; description: string; image: string }[]
}) {
  const spans = [
    'sm:col-span-2 lg:col-span-2 lg:row-span-2',
    '',
    '',
    'lg:col-span-1',
    'sm:col-span-2 lg:col-span-2',
  ]

  return (
    <div className="grid auto-rows-[220px] gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[200px] lg:gap-4">
      {items.map((item, index) => (
        <div
          key={item.title}
          className={`group relative overflow-hidden rounded-3xl ${spans[index] ?? ''}`}
        >
          <ImageFrame
            src={item.image}
            alt={item.title}
            className="absolute inset-0 h-full w-full"
            position={index === 0 ? 'center-top' : 'center'}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <h3 className="font-display text-xl text-gold md:text-2xl">
              {item.title}
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

/** Two-up feature cards with image header */
export function FeatureCardGrid({
  items,
  dark = false,
}: {
  items: { title: string; description: string; image: string }[]
  dark?: boolean
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item, index) => (
        <article
          key={item.title}
          className={`group overflow-hidden rounded-3xl ${
            dark ? 'bg-white/5 ring-1 ring-white/10' : 'bg-white shadow-sm ring-1 ring-black/5'
          }`}
        >
          <ImageFrame
            src={item.image}
            alt={item.title}
            aspect="aspect-[16/10]"
            position={index % 2 === 0 ? 'center-top' : 'center'}
          />
          <div className="p-6 md:p-8">
            <h3
              className={`font-display text-xl md:text-2xl ${
                dark ? 'text-gold' : 'text-ink'
              }`}
            >
              {item.title}
            </h3>
            <p
              className={`mt-3 text-sm leading-relaxed md:text-base ${
                dark ? 'text-white/75' : 'text-muted'
              }`}
            >
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}

/** Horizontal incentive / info cards */
export function InfoCardRow({
  items,
}: {
  items: { title: string; description: string; image: string }[]
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item, index) => (
        <article
          key={item.title}
          className="grid overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 sm:grid-cols-[148px_1fr] md:grid-cols-[168px_1fr]"
        >
          <ImageFrame
            src={item.image}
            alt={item.title}
            aspect="aspect-[4/3] sm:aspect-auto sm:min-h-full"
            position={index % 2 === 0 ? 'center-top' : 'center'}
          />
          <div className="flex flex-col justify-center p-6">
            <h3 className="font-display text-lg text-ink md:text-xl">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

/** Service pages: three-image overlapping cluster */
export function ServiceImageCluster({
  left,
  center,
  right,
}: {
  left: string
  center: string
  right: string
}) {
  return (
    <div className="relative mx-auto w-full min-w-0 max-w-lg pb-[16%] lg:max-w-none">
      <div className="group relative z-10 w-[74%] overflow-hidden rounded-2xl shadow-xl">
        <ImageFrame
          src={center}
          alt=""
          aspect="aspect-[4/3]"
          position="center"
          loading="eager"
        />
      </div>
      <div className="group absolute top-[8%] right-0 z-20 w-[40%] overflow-hidden rounded-2xl shadow-lg ring-4 ring-paper">
        <ImageFrame
          src={right}
          alt=""
          aspect="aspect-[4/5]"
          position="center"
          loading="eager"
        />
      </div>
      <div className="group absolute bottom-0 left-[8%] z-20 w-[38%] overflow-hidden rounded-2xl shadow-lg ring-4 ring-paper">
        <ImageFrame
          src={left}
          alt=""
          aspect="aspect-[4/3]"
          position="center"
          loading="eager"
        />
      </div>
    </div>
  )
}

/** Two-image cluster for solar and similar */
export function ServiceImagePair({
  primary,
  secondary,
}: {
  primary: string
  secondary: string
}) {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-sm md:max-w-md lg:max-w-none">
      <div className="group relative z-10 overflow-hidden rounded-2xl shadow-xl">
        <ImageFrame
          src={primary}
          alt=""
          aspect="aspect-[4/5]"
          position="center-top"
          loading="eager"
        />
      </div>
      <div className="group absolute -bottom-4 -right-2 z-20 w-[52%] overflow-hidden rounded-xl border-4 border-paper shadow-lg md:-right-6">
        <ImageFrame
          src={secondary}
          alt=""
          aspect="aspect-square"
          position="center"
          loading="eager"
        />
      </div>
    </div>
  )
}

/** Manpower-style scattered collage */
export function ServiceImageScatter({ images }: { images: string[] }) {
  const slots = [
    'bottom-[4%] left-0 w-[32%]',
    'left-[28%] top-[6%] w-[36%]',
    'bottom-0 right-0 w-[34%]',
    'bottom-[18%] left-[18%] w-[28%]',
    'right-[8%] top-0 w-[26%]',
    'right-[22%] top-[38%] w-[22%]',
  ]

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md md:max-w-lg lg:max-w-none">
      {images.slice(0, 6).map((src, i) => (
        <div
          key={src}
          className={`group absolute overflow-hidden rounded-lg shadow-md ring-2 ring-paper ${slots[i]}`}
        >
          <ImageFrame
            src={src}
            alt=""
            aspect="aspect-square"
            position={i % 2 === 0 ? 'center-top' : 'center'}
            loading={i < 2 ? 'eager' : 'lazy'}
          />
        </div>
      ))}
    </div>
  )
}

/** Project gallery: hero + asymmetric grid */
export function ProjectMosaic({
  images,
}: {
  images: { src: string; alt: string }[]
}) {
  const [hero, ...rest] = images
  const pattern = [
    'md:col-span-2 md:row-span-2',
    'md:col-span-1',
    'md:col-span-1',
    'md:col-span-1 md:row-span-2',
    'md:col-span-1',
    'md:col-span-2',
    'md:col-span-1',
  ]

  return (
    <div className="grid gap-3 md:grid-cols-4 md:auto-rows-[180px] lg:auto-rows-[200px]">
      {hero && (
        <div className="group col-span-full overflow-hidden rounded-2xl md:col-span-2 md:row-span-2">
          <ImageFrame
            src={hero.src}
            alt={hero.alt}
            aspect="aspect-[16/10] w-full md:aspect-auto md:h-full md:min-h-[240px]"
            position="center-top"
          />
        </div>
      )}
      {rest.slice(0, 7).map((img, i) => (
        <div
          key={img.src}
          className={`group overflow-hidden rounded-2xl ${pattern[i] ?? ''}`}
        >
          <ImageFrame
            src={img.src}
            alt={img.alt}
            aspect="aspect-[4/3] md:aspect-auto md:h-full"
            position={i % 3 === 0 ? 'center-top' : 'center'}
          />
        </div>
      ))}
    </div>
  )
}
