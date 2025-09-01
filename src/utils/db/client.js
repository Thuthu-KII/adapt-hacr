import { createClient } from "@/utils/supabase/client";

/**
 * Check if a user exists in the Supabase database by their Clerk ID
 * @param {string} clerk_id - The Clerk ID of the user to check
 * @returns {Promise<boolean>} - True if the user exists, false otherwise
 */
export async function checkUserExists(clerk_id) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("clerk_id", clerk_id);

  if (error) {
    console.error("Error checking user existence:", error);
    throw error;
  }

  return data.length > 0;
}

export async function checkOnboardingStatus(clerk_id) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("users")
    .select("onboarding_complete")
    .eq("clerk_id", clerk_id)
    .single();

  if (error) {
    console.error("Error checking onboarding status:", error);
    throw error;
  }

  return data ? data.onboarding_complete : false;
}

export async function createUser(clerk_id, email, name) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("users")
    .insert([{ clerk_id, email, name, onboarding_complete: false }])
    .select();

  if (error) {
    console.error("Error creating user:", error);
    throw error;
  }

  return data[0];
}

/**
 * Upload an image to Supabase storage
 * @param {File} file - The image file to upload
 * @param {string} bucket - The name of the storage bucket
 * @param {string} fileName - The name to give the uploaded file
 * @returns {Promise<string>} - The public URL of the uploaded image
 */
export const uploadImageToSupabase = async (file, bucket, fileName) => {
  const supabase = createClient();

  const { error } = await supabase.storage.from(bucket).upload(fileName, file);
  if (error) {
    console.error("Error uploading image:", error.message);
    throw error;
  }
  const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);
  return data.publicUrl;
};
