import "boxicons";
import { Textarea } from "@/components/ui/textarea";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { toast, Toaster } from "sonner";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function InteractionSection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // สมมุติว่าผู้ใช้ยังไม่ได้ล็อกอิน
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const { postID } = useParams();
  const articleUrl = `http://localhost:5173/post/${postID}`;

  const handleLikeClick = () => {
    if (!isLoggedIn) {
      setShowAlertDialog(true);
    } else {
      // Handle like action
    }
  };
  const handleCommentSubmit = () => {
    if (!isLoggedIn) {
      setShowAlertDialog(true);
    } else {
      // Handle comment submission
    }
  };

  const handleCopyLink = () => {
    if (postID) {
      navigator.clipboard.writeText(articleUrl);
      return toast.success("Copied!", {
        description: "This article has been copied to your clipboard.",
      });
    } else {
      return toast.error("This article has not been copied to your clipboard.");
    }
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="max-w-[815px] h-20 flex justify-between items-center gap-4 px-6 py-4 rounded-2xl bg-[#EFEEEB]">
        <button
          className="w-32 h-12 flex justify-center items-center gap-1 rounded-full py-3 border border-solid border-[#75716B] bg-white"
          onClick={handleLikeClick}
        >
          <box-icon name="smile" color="#5a5555"></box-icon>
          321
        </button>
        <div className="flex justify-center items-center gap-3">
          <button
            className="w-44 h-12 flex justify-center items-center gap-1 rounded-full py-3 border border-solid border-[#75716B] bg-white"
            onClick={handleCopyLink}
          >
            <box-icon name="copy" rotate="90" color="#ada1a1"></box-icon>
            Copy link
          </button>
          <Toaster richColors closeButton />
          <a
            href={`https://www.facebook.com/share.php?u=${encodeURIComponent(
              articleUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="size-12 bg-[#1877F2] rounded-full flex justify-center items-center"
          >
            <box-icon
              name="facebook"
              type="logo"
              animation="tada"
              size="md"
              color="#EFEEEB"
            ></box-icon>
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              articleUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="size-12 bg-[#0077B5] rounded-full flex justify-center items-center"
          >
            <box-icon
              name="linkedin"
              type="logo"
              animation="tada"
              size="md"
              color="#EFEEEB"
            ></box-icon>
          </a>
          <a
            href={`https://www.twitter.com/share?&url=${encodeURIComponent(
              articleUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="size-12 bg-[#55ACEE] rounded-full flex justify-center items-center"
          >
            <box-icon
              name="twitter"
              type="logo"
              animation="tada"
              size="md"
              color="#EFEEEB"
            ></box-icon>
          </a>
        </div>
      </div>
      <div className="max-w-[815px] h-auto">
        <h1 className="text-xl font-medium text-[#75716B]">Comment</h1>
        <Textarea
          placeholder="What are your thoughts?"
          className="rounded-xl text-2xl font-medium text-[#75716B]"
        />
        <div className="flex justify-end mt-2">
          <button
            className="flex justify-center items-center py-3 w-32 h-12 text-base text-slate-200 rounded-full bg-black"
            onClick={handleCommentSubmit}
          >
            Send
          </button>
        </div>
      </div>
      {showAlertDialog && (
        <AlertDialog open={showAlertDialog} onOpenChange={setShowAlertDialog}>
          <AlertDialogContent className="max-w-xl h-[352px] bg-white shadow-lg !rounded-2xl">
            <div className="flex flex-col gap-2">
              <div className="flex justify-end px-3">
                <button
                  className="text-xl font-light"
                  onClick={() => setShowAlertDialog(false)}
                >
                  <box-icon name="x" size="md" color="#26231E"></box-icon>
                </button>
              </div>
              <div className="flex flex-col items-center p">
                <h1 className="text-4xl font-bold text-[#26231E]">
                  Create an account to
                </h1>
                <h1 className="text-4xl font-bold text-[#26231E]">continue</h1>
              </div>

              <div className="flex flex-col justify-center items-center gap-4 p-10">
                <button className="w-52 h-12 flex justify-center items-center rounded-full px-10 py-3 bg-[#26231E] text-white hover:bg-blue-700">
                  Create account
                </button>
                <div className="flex gap-3 pt-2">
                  <p className="text-lg font-semibold text-[#75716B]">
                    Already have an account?
                  </p>
                  <button className="text-lg font-semibold mb-4 underline underline-offset-2 text-[#26231E]">
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
}
