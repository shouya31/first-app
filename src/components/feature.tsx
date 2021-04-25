export const Feature = () => {
  return (
    <div style={{ background: '#EEEEEE' }}>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
          <p className="text-xs font-semibold tracking-wide uppercase md:mb-2">
            Service
          </p>
          <p className="text-base text-gray-700 md:text-lg">事業紹介</p>
        </div>
        <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt=""
            />
            <p className="mb-2 text-sx font-bold leading-none">
              事業1
            </p>
            <p className="text-gray-700">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <p className="mb-2 text-sx font-bold leading-none">
              事業2
            </p>
            <p className="text-gray-700">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <p className="mb-2 text-sx font-bold leading-none">
              事業3
            </p>
            <p className="text-gray-700">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
