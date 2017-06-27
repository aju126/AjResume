require 'test_helper'

class BlogSourcesControllerTest < ActionController::TestCase
  setup do
    @blog_source = blog_sources(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:blog_sources)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create blog_source" do
    assert_difference('BlogSource.count') do
      post :create, blog_source: {  }
    end

    assert_redirected_to blog_source_path(assigns(:blog_source))
  end

  test "should show blog_source" do
    get :show, id: @blog_source
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @blog_source
    assert_response :success
  end

  test "should update blog_source" do
    patch :update, id: @blog_source, blog_source: {  }
    assert_redirected_to blog_source_path(assigns(:blog_source))
  end

  test "should destroy blog_source" do
    assert_difference('BlogSource.count', -1) do
      delete :destroy, id: @blog_source
    end

    assert_redirected_to blog_sources_path
  end
end
