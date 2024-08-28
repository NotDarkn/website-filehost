import Image from 'next/image'

const FourOhFour: React.FC<{ errorMsg: string }> = ({ errorMsg }) => {
  return (
    <div className="my-12">
      <div className="mx-auto w-1/3">
        <Image src="/images/fabulous-rip-2.png" alt="404" width={684} height={684} priority />
      </div>
      <div className="mx-auto mt-6 max-w-xl text-gray-500">
        <div className="mb-8 text-xl font-bold">
          <span className="underline decoration-red-500 decoration-wavy">! How did you get here?</span>.
        </div>
        <div className="mb-4 overflow-hidden break-all rounded border border-gray-400/20 bg-gray-50 p-2 font-mono text-xs dark:bg-gray-800">
          {errorMsg}
        </div>
        <div className="text-sm">
          Press{' '}
          <kbd className="rounded border border-gray-400/20 bg-gray-100 px-1 font-mono text-xs dark:bg-gray-800">
            F12
          </kbd>{' '}
          and open devtools for more details, or seek help in my{' '}
          <a
            className="text-blue-600 hover:text-blue-700 hover:underline"
            href="https://discord.com/invite/ER8saRhYpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord DMs
          </a>
          !
        </div>
      </div>
    </div>
  )
}

export default FourOhFour
