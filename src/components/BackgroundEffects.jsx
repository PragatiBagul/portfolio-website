export default function BackgroundEffects() {
  return (
    <>
      {/* Gradient blobs */}
      <div className="absolute top-24 right-24 w-72 h-72
                      bg-pink-300 dark:bg-pink-500
                      rounded-full blur-3xl opacity-30" />

      <div className="absolute bottom-24 left-24 w-72 h-72
                      bg-purple-300 dark:bg-purple-500
                      rounded-full blur-3xl opacity-30" />
    </>
  );
}
