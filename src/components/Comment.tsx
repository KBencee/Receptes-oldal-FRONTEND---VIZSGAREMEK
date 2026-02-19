import { useContext } from "react"
import type { CommentType } from "../queryOptions/createRecipeQueryOption"
import { AuthUserContext } from "../context/AuthenticatedUserContextProvider"
import styles from '../css/Comments.module.css'

const Comment = (comment: CommentType) => {
  const authUser = useContext(AuthUserContext)
  return (
	<>
		<div className={styles.comments}>
			<div className={styles.comment}>
				<h3>{comment.username}:</h3>
				<p>{comment.szoveg}</p>
				<h6>{new Date(comment.irtaEkkor).toLocaleDateString()}</h6>
			</div>
		</div>
		{
			authUser && 
			<>
				<h2>Írjon kommentet:</h2>
				<div className={styles.sendComment}>
					<input type="text" name="comment"/>
					<button><i className="fa-solid fa-paper-plane fa-xl"></i></button>
				</div>
			</>
		}
	</>
  )
}

export default Comment