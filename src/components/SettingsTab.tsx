import ImageUpload from "./ImageUpload"

const SettingsTab = (props: { imageUrl: string, username: string, onClick: () => void }) => {
  return (
    <div className="settingsTab">
      {/* <img src={props.imageUrl} className="profileImage"/>
       */}
       <ImageUpload image={props.imageUrl} setImage={() => {}} />
      <h1 contentEditable>{props.username}</h1>
        <button onClick={props.onClick}>Mentés</button>
        <button onClick={props.onClick}>Mégse</button>
    </div>
  )
}

export default SettingsTab