const Conversation = () => {
  return (
    <>
      <div className="flex items-center gap-2 hover:bg-blue-500 rounded p-2 cursor-pointer">

        <div className="avatar online">
          <div className="w-12 rounded-full ring ring-primary">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>

        <div><p>Saidulu</p></div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </>
  )
}

export default Conversation
