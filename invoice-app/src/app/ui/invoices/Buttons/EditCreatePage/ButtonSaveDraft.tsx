"use client"

export default function ButtonSaveDraft() {
  function saveDraft() {
    console.log("Saved as Draft")
  }

  return (<button className={`bg-draftColor text-secondaryDark text-sm py-3 px-4 mx-2 rounded-3xl font-bold`} onClick={saveDraft}>Save Draft</button>)
}
