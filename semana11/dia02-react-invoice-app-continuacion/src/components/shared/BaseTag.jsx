const BaseTag = ({ label, background, textColor }) => {
  return (
    <div className={`py-3 rounded-md text-center capitalize font-extrabold min-w-[120px] flex items-center justify-center ${background}`}>
      <span className={`text-3xl mr-2 ${textColor}`}>•</span>
      {label}
    </div>
  )
}

export default BaseTag