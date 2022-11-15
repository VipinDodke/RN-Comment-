export interface Comment {
  id: string;
  rootId?: string;
  commentLabel: string;
  subComments?: Comment[];
}

export interface CommentsProps {
  comment: Comment;
  onAddSubComment: (id: string, rootId: string, commentText: string) => void;
}

export interface CommentBoxProps {
  placeHolder?: string;
  onAddComment: (comment: string) => void;
}

export type AddSubComment = (
  comment: Comment,
  targetId: string,
  newComment: Comment
) => Comment;

export type AddRootComment = (comment: string) => void;

export type HandleOnAddSubComment = (
  id: string,
  rootId: string,
  text: string
) => void;

export type OnAddNewComment = (comment: string) => void;
