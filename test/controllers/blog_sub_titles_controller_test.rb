require 'test_helper'

class BlogSubTitlesControllerTest < ActionController::TestCase
  setup do
    @blog_sub_title = blog_sub_titles(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:blog_sub_titles)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create blog_sub_title" do
    assert_difference('BlogSubTitle.count') do
      post :create, blog_sub_title: {  }
    end

    assert_redirected_to blog_sub_title_path(assigns(:blog_sub_title))
  end

  test "should show blog_sub_title" do
    get :show, id: @blog_sub_title
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @blog_sub_title
    assert_response :success
  end

  test "should update blog_sub_title" do
    patch :update, id: @blog_sub_title, blog_sub_title: {  }
    assert_redirected_to blog_sub_title_path(assigns(:blog_sub_title))
  end

  test "should destroy blog_sub_title" do
    assert_difference('BlogSubTitle.count', -1) do
      delete :destroy, id: @blog_sub_title
    end

    assert_redirected_to blog_sub_titles_path
  end
end
