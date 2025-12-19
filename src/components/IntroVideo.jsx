export default function IntroVideo() {
  return (
    // <div className="mt-10 flex justify-center">
    //   <video
    //     className="w-full max-w-2xl rounded-2xl 
    //                shadow-md dark:shadow-none
    //                border border-gray-200 dark:border-gray-700"
    //     src="memoji.mp4"
    //     autoPlay
    //     muted
    //     loop
    //     playsInline
    //   />
    // </div>
    <div className="mt-6 flex justify-center">
  <video
    className="w-full max-w-xl rounded-2xl 
               shadow-md dark:shadow-none
               border border-gray-200 dark:border-gray-700"
    src="/memoji.mp4"
    autoPlay
    muted
    loop
    playsInline
  />
</div>

  );
}
