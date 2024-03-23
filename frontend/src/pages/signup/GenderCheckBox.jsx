const GenderCheckBox = ({ inputs, setInputs }) => {
  return (
    <div className="flex gap-2">
      <label className="label cursor-pointer">
        <span className="label-text pr-2">Male</span>
        <input type="radio" name="radio" className="radio-sm"
          onChange={() => setInputs({ ...inputs, gender: "male" })}
        />
      </label>
      <label className="label cursor-pointer">
        <span className="label-text pr-2">Female</span>
        <input type="radio" name="radio" className="radio-sm"
          onChange={() => setInputs({ ...inputs, gender: "female" })}
        />
      </label>
    </div>
  )
}

export default GenderCheckBox

// <div className='flex'>
//   <div className='form-control'>
//     <label className={`label gap-2 cursor-pointer`}>
//       <span className='label-text'>Male</span>
//       <input type='checkbox' className='checkbox border-slate-900' />
//     </label>
//   </div>
//   <div className='form-control'>
//     <label className={`label gap-2 cursor-pointer`}>
//       <span className='label-text'>Female</span>
//       <input type='checkbox' className='checkbox border-slate-900' />
//     </label>
//   </div>
// </div>
