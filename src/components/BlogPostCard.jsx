import { Clock, MessageSquare, ChevronRight } from 'lucide-react';

const BlogPostCard = ({ post }) => {
    return (
        <div className="bg-white shadow-sm hover:shadow-lg transition-shadow">
            {/* Post Image */}
            <div className="relative overflow-hidden">
                <div className="aspect-[4/3] w-full">
                    <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* NEW Badge */}
                {post.isNew && (
                    <div className="absolute top-5 left-5">
            <span className="bg-[#E74040] text-white text-sm font-bold px-3 py-1">
              NEW
            </span>
                    </div>
                )}
            </div>

            {/* Post Content */}
            <div className="p-6 lg:p-8">
                {/* Tags */}
                <div className="flex items-center gap-4 mb-3 text-xs">
          <span className="text-[#23A6F0] hover:underline cursor-pointer">
            {post.tags[0]}
          </span>
                    <span className="text-[#737373] hover:text-[#252B42] cursor-pointer">
            {post.tags[1]}
          </span>
                    <span className="text-[#737373] hover:text-[#252B42] cursor-pointer">
            {post.tags[2]}
          </span>
                </div>

                {/* Title */}
                <h4 className="font-bold text-xl text-[#252B42] mb-3 hover:text-[#23A6F0] cursor-pointer transition-colors">
                    {post.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-[#737373] mb-4 leading-relaxed">
                    {post.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-[#737373]">
                        <Clock size={16} className="text-[#23A6F0]" />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#737373]">
                        <MessageSquare size={16} className="text-[#23856D]" />
                        <span>{post.comments} comments</span>
                    </div>
                </div>

                {/* Learn More Link */}
                <button className="flex items-center gap-2 text-sm font-bold text-[#737373] hover:text-[#23A6F0] mt-4 transition-colors group">
                    <span>Learn More</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default BlogPostCard;