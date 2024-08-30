import { useState } from 'react'
import Product from './Product'
import CommentSection from './CommentSection'

function Modal() {
  const [showComments, setShowComments] = useState(false)

  return (
    <div className="modal">
      <Product />
      <CommentSection />
    </div>
  )
}

export default Modal;


