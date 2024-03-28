import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
	const { loading, conversations } = useGetConversations();
	// console.log(conversations);
	return (
		<div className="py-2 flex flex-col overflow-auto">
			{conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length-1}
				/>
			))}
			{loading ? <span className="loading loading-spinner"></span> : null}
		</div>
	);
};
export default Conversations;
