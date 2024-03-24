const MessageSkeleton = () => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <div className="skeleton w-14 h-14 rounded-full shrink-0"></div>
        <div className="flex flex-col gap-2">
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-4 w-28"></div>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-end">
        <div className="flex flex-col gap-2">
          <div className="flex justify-end">
            <div className="skeleton h-4 w-20"></div>
          </div>
          <div className="skeleton h-4 w-28"></div>
        </div>
        <div className="skeleton w-14 h-14 rounded-full shrink-0"></div>
      </div>
    </div>
  )
}

export default MessageSkeleton
