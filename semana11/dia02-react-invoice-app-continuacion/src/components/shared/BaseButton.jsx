const BaseButton = ({ children, background, textColor }) => {
  return (
    <button className={`${background} rounded-full px-8 py-3 font-extrabold ${textColor}`}
    >
      {children}
    </button>
  )
}

export default BaseButton