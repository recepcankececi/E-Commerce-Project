import BlogPostCard from './BlogPostCard';
import { blogPosts } from '../data/blogPosts';

const FeaturedPosts = () => {
    const posts = blogPosts;

    return (
        <section className="py-12 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <h6 className="text-sm font-bold text-[#23A6F0] mb-2 lg:mb-3">
                        Practice Advice
                    </h6>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#252B42] mb-3 lg:mb-4">
                        Featured Posts
                    </h2>
                    <p className="text-sm lg:text-base text-[#737373] max-w-xl mx-auto">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>

                {/* Posts Grid */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-7">
                    {posts.map((post) => (
                        <div key={post.id} className="flex-1">
                            <BlogPostCard post={post} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedPosts;