"use client"

export default function ButtonSaveChanges({ name, isEditing }: { name: string, isEditing: boolean }) {
  function saveChanges() {
    isEditing ? console.log("Saved") : console.log("Saved and Sent")
  }

  return (<button className={`bg-primary text-text text-sm py-3 px-4 mx-2 rounded-3xl font-bold`} onClick={saveChanges}>{name}</button>)
}
