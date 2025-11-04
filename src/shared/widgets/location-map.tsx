'use client'

export default function LocationMap() {
  return (
    <section className='w-full bg-background flex justify-center'>
      <div className='w-full max-w-5xl'>
        <iframe
          allowFullScreen
          className='rounded-xl shadow-lg border-0 w-full'
          height='400'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.688484877328!2d49.58956690000001!3d37.3025162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401fd90030027f33%3A0xe181fc637dee5018!2zTm9ydGhtYW4g2YbZiNix2Ksg2YXZhg!5e0!3m2!1sen!2sde!4v1762063922161!5m2!1sen!2sde'
          title='Store Location'
          width='100%'
        ></iframe>
      </div>
    </section>
  )
}
