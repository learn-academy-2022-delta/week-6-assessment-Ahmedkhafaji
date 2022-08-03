# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
#  BlogPost will inherit all methods from ApplicationController
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # will call on the methods (posts) to contain in the blogpost
    @posts = BlogPost.all
  end

  # ---3)
  # call that will save the content from the database in the BlogPost with an Id
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # This will let user add content to the app, new form for the user and gets stored.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # the code below allows a user to add new content, content will be redircted depending if it meets post.valid.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    # this allows to eddit a form based on the id.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # this will allow to update data based on the id and uses a condition to redirect that updated post
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # it gives direction to a certain page. in this case (blog_post_path(@post)) will go to the blog post page.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # private keyword can only be used when called.
  private
  def blog_post_params
    # ---10)
    # These are the only parameters that will be permitted when making a new post.
    params.require(:blog_post).permit(:title, :content)
  end
end
