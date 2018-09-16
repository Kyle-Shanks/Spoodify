# == Schema Information
#
# Table name: artists
#
#  id          :bigint(8)        not null, primary key
#  name        :string           not null
#  description :text
#  img_url     :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Artist < ApplicationRecord
  # after_initialize :add_photo

  validates :name, presence: true, uniqueness: true

  has_many :albums
  has_many :tracks, through: :albums
  has_one_attached :photo

  # def add_photo
  #   file = EzDownload.open("https://s3.amazonaws.com/spoodify-dev/#{self.img_url}")
  #   self.photo.attach(io: file, filename: self.img_url)
  #   self.save!
  # end
end
