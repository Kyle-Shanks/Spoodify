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
  validates :name, presence: true, uniqueness: true

  has_many :albums
  has_many :tracks, through: :albums
  has_one_attached :photo

  has_many :follows, as: :followable, dependent: :destroy
  has_many :followers, through: :follows, source: :user
end
