const Download = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header/Logo */}
      <header className="flex items-center mb-12 justify-between">
        <div className="flex items-center">
          <img src="./assets/logo.svg" className="h-10" />
        </div>
        <ul className="ml-4 text-sm text-zinc-400 flex gap-8">
          <a
            href="./index.html"
            className="hover:text-zinc-200 cursor-pointer transition-all"
          >
            Create Image
          </a>
          <a
            href="./downloaded.html"
            className="hover:text-zinc-200 cursor-pointer transition-all font-medium text-zinc-200"
          >
            Downloaded
          </a>
        </ul>
      </header>
      {/* Glow */}
      <div className="fixed -bottom-1/4 -right-0 ">
        <div className="h-96 w-96 bg-gradient-to-r from-pink-600 to-indigo-400 rotate-90 rounded-full blur-[180px] "></div>
      </div>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Welcome Message */}
        <h2 className="text-4xl font-bold mb-8">
          Downloaded <span className="text-2xl">👋</span>
        </h2>
        {/* Image Presets Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Image Card 1 */}
            <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
              <div className="absolute bottom-2 right-2  p-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-image-down-icon lucide-image-down"
                >
                  <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                  <path d="m14 19 3 3v-5.5" />
                  <path d="m17 22 3-3" />
                  <circle cx={9} cy={9} r={2} />
                </svg>
              </div>
              <img
                src="./assets/images/ai-image-1.jpeg"
                alt="Anime character in kimono"
                className="w-full h-48 object-cover"
              />
            </div>
            {/* Image Card 2 */}
            <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
              <div className="absolute bottom-2 right-2  p-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-image-down-icon lucide-image-down"
                >
                  <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                  <path d="m14 19 3 3v-5.5" />
                  <path d="m17 22 3-3" />
                  <circle cx={9} cy={9} r={2} />
                </svg>
              </div>
              <img
                src="./assets/images/ai-image-2.jpeg"
                alt="Portrait with yellow background"
                className="w-full h-48 object-cover"
              />
            </div>
            {/* Image Card 3 */}
            <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
              <div className="absolute bottom-2 right-2  p-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-image-down-icon lucide-image-down"
                >
                  <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                  <path d="m14 19 3 3v-5.5" />
                  <path d="m17 22 3-3" />
                  <circle cx={9} cy={9} r={2} />
                </svg>
              </div>
              <img
                src="./assets/images/ai-image-3.jpeg"
                alt="Fantasy landscape with castle"
                className="w-full h-48 object-cover"
              />
            </div>
            {/* Image Card 4 */}
            <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
              <div className="absolute bottom-2 right-2  p-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-image-down-icon lucide-image-down"
                >
                  <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                  <path d="m14 19 3 3v-5.5" />
                  <path d="m17 22 3-3" />
                  <circle cx={9} cy={9} r={2} />
                </svg>
              </div>
              <img
                src="./assets/images/ai-image-4.jpeg"
                alt="Colorful anime character"
                className="w-full h-48 object-cover"
              />
            </div>
            {/* Image Card 5 */}
            <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
              <div className="absolute bottom-2 right-2  p-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-image-down-icon lucide-image-down"
                >
                  <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                  <path d="m14 19 3 3v-5.5" />
                  <path d="m17 22 3-3" />
                  <circle cx={9} cy={9} r={2} />
                </svg>
              </div>
              <img
                src="./assets/images/ai-image-5.jpeg"
                alt="Abstract art"
                className="w-full h-48 object-cover"
              />
            </div>
            {/* Image Card 1 */}
            <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
              <div className="absolute bottom-2 right-2  p-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-image-down-icon lucide-image-down"
                >
                  <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                  <path d="m14 19 3 3v-5.5" />
                  <path d="m17 22 3-3" />
                  <circle cx={9} cy={9} r={2} />
                </svg>
              </div>
              <img
                src="./assets/images/ai-image-1.jpeg"
                alt="Anime character in kimono"
                className="w-full h-48 object-cover"
              />
            </div>
            {/* Image Card 2 */}
            <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
              <div className="absolute bottom-2 right-2  p-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-image-down-icon lucide-image-down"
                >
                  <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                  <path d="m14 19 3 3v-5.5" />
                  <path d="m17 22 3-3" />
                  <circle cx={9} cy={9} r={2} />
                </svg>
              </div>
              <img
                src="./assets/images/ai-image-2.jpeg"
                alt="Portrait with yellow background"
                className="w-full h-48 object-cover"
              />
            </div>
            {/* Image Card 3 */}
            <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
              <div className="absolute bottom-2 right-2  p-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-image-down-icon lucide-image-down"
                >
                  <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                  <path d="m14 19 3 3v-5.5" />
                  <path d="m17 22 3-3" />
                  <circle cx={9} cy={9} r={2} />
                </svg>
              </div>
              <img
                src="./assets/images/ai-image-3.jpeg"
                alt="Fantasy landscape with castle"
                className="w-full h-48 object-cover"
              />
            </div>
            {/* Image Card 4 */}
            <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
              <div className="absolute bottom-2 right-2  p-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-image-down-icon lucide-image-down"
                >
                  <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                  <path d="m14 19 3 3v-5.5" />
                  <path d="m17 22 3-3" />
                  <circle cx={9} cy={9} r={2} />
                </svg>
              </div>
              <img
                src="./assets/images/ai-image-4.jpeg"
                alt="Colorful anime character"
                className="w-full h-48 object-cover"
              />
            </div>
            {/* Image Card 5 */}
            <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
              <div className="absolute bottom-2 right-2  p-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-image-down-icon lucide-image-down"
                >
                  <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                  <path d="m14 19 3 3v-5.5" />
                  <path d="m17 22 3-3" />
                  <circle cx={9} cy={9} r={2} />
                </svg>
              </div>
              <img
                src="./assets/images/ai-image-5.jpeg"
                alt="Abstract art"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Download;
