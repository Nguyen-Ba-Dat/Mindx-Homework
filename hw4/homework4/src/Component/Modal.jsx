import { useState } from 'react'
import Product from './Product'
import CommentSection from './CommentSection'

function Modal() {
  const [showComments, setShowComments] = useState(false)

  return (
    <div className="modal">
      <Product />
      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? 'Ẩn bình luận' : 'Hiện bình luận'}
      </button>
      {showComments && <CommentSection />}
    </div>
  )
}

export default Modal;


