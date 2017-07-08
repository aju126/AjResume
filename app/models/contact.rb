class Contact

  def facebook
    { name: 'facebook',
      classname: 'fa fa-facebook',
      fcolor: 'white',
      color: 'background-color-1',
      url: 'https://www.facebook.com/ajitk.kumar.9'}
  end

  def linked_in
    { name: 'linkedin',
      classname: 'fa fa-linkedin',
      fcolor: 'white',
      color: 'background-linkedin',
      url: "https://www.linkedin.com/in/ajith-kumar-90925117"
    }
  end

  def phone
    { name: '+91-9986003200',
      classname: 'fa fa-mobile',
      fcolor: 'white',
      color: 'background-color-3',
      url: '#'}
  end

  def email
    { name: 'aju.126@gmail.com',
      classname: 'glyphicon glyphicon-send',
      fcolor: 'white',
      color: 'background-color-3',
      url: '#'}
  end

  def resume
    { name: 'resume',
      classname: 'glyphicon glyphicon-leaf',
      fcolor: 'white',
      download: 'ajith_resume',
      color: 'background-color-2',
      url: ActionController::Base.helpers.asset_path("ajith_resume_2016.pdf")}
  end

  def blog
    { name: 'blog',
      classname: 'glyphicon glyphicon-leaf',
      fcolor: 'white',
      color: 'background-color-1',
      url: '/blogs/recent'}
  end

  def hash_value
    {name: [facebook, linked_in, phone, email, resume, blog]}
  end
end