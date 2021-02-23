import Link from 'next/link'

export default function HeroPost() {
  return (
    <div class="{{ .Params.colour }} overflow-hidden">
    <div
      class="relative mx-auto max-w-screen-xl px-4 py-12 md:py-20 lg:py-24 xl:py-32"
    >
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="lg:mt-5">
          <div class="text-sm text-left font-semibold uppercase text-gray-800">
           TITLE
          </div>
          <h1
            class="mb-3 mt-2 tracking-tight text-left font-extrabold leading-none text-4xl md:text-5xl"
          >
            TITLE
          </h1>
          <h2
            class="text-left text-lg sm:text-lg md:max-w-3xl xl:max-w-lg text-gray-800"
          >
            ewfwef wefew f wef wef
          </h2>
          <div class="text-left mt-5 sm:mt-8 mb-10">
            <button
              class="rounded-full shadow px-8 py-3 border-transparent text-lg leading-6 font-semibold bg-transparent border-paceText border-2 hover:text-white hover:bg-paceText focus:shadow-outline focus:outline-none md:py-4 md:text-lg md:px-10"
            >
              <a href="/book-a-demo/">
                BUTTON
              </a>
            </button>
          </div>
        </div>
        <div class="relative mx-auto w-full overflow-hidden rounded-lg">

        </div>
      </div>
    </div>
  </div>
  
   
    )
}
