import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react"
import { ChangeEvent, useState } from "react"
import { v4 as uuidv4 } from "uuid"

export default function ImageUploader() {
  const [images, setImages] = useState<File | null>(null)
  const supabase = useSupabaseClient()

  const baseUrl =
    "https://jtufzitlmgfxgsawjmxc.supabase.co/storage/v1/object/public/images/"

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(e.target.files[0])
    }
  }

  // const getBucketUrl = async (filepath: string) => {
  //   try {
  //     const { data, error } = await supabase.storage.getBucket("images") // Replace with your bucket name

  //     if (error) {
  //       console.error("Error getting bucket URL:", error.message)
  //     } else {
  //       console.log(data)
  //       const imagepath = `${data}/${filepath}`
  //       console.log(imagepath)
  //     }
  //   } catch (error: any) {
  //     console.error("Error getting bucket URL:", error.message)
  //   }
  // }

  const handleUpload = async () => {
    if (images) {
      const filename = `${uuidv4()}-${images.name}`
      const { data, error } = await supabase.storage
        .from("images")
        .upload(filename, images)

      if (error) {
        console.error("Error uploading image:", error.message)
      } else {
        // console.log("Image uploaded successfully:", data)
        const imagepath = baseUrl + data.path
        console.log(imagepath)

        // getBucketUrl(filepath)
      }
    }
  }

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border rounded-sm border-gray-300 p-2 my-4"
        />
        <button
          type="submit"
          onClick={handleUpload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload Image
        </button>
      </div>
    </>
  )
}
