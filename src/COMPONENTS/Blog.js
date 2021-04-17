import MainSection from "./Sections/MainSection.js";
import Navbar from "./Section Elements/Navbar";
import Filters from "./Sections/Filters.js";
import HomepagePosts from "./Sections/HomepagePosts";

const Blog = () => {
  return (
    <div
      id="background"
      className="w-full min-h-screen bg-blue-50 bg-opacity-75"
    >
      <Navbar />
      <MainSection />
      <Filters />
      <div className="container mx-auto flex items-center">
        <HomepagePosts />
        <div className="w-1/5 text-center h-full hidden lg:block bg-yellow-50">
          Sidebar
        </div>
      </div>
    </div>
  );
};

export default Blog;
