require 'test_helper'

class BlogTitlesControllerTest < ActionController::TestCase
  setup do
    @blog_title = blog_titles(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:blog_titles)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create blog_title" do
    assert_difference('BlogTitle.count') do
      post :create, blog_title: {  }
    end

    assert_redirected_to blog_title_path(assigns(:blog_title))
  end

  test "should show blog_title" do
    get :show, id: @blog_title
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @blog_title
    assert_response :success
  end

  test "should update blog_title" do
    patch :update, id: @blog_title, blog_title: {  }
    assert_redirected_to blog_title_path(assigns(:blog_title))
  end

  test "should destroy blog_title" do
    assert_difference('BlogTitle.count', -1) do
      delete :destroy, id: @blog_title
    end

    assert_redirected_to blog_titles_path
  end
end
