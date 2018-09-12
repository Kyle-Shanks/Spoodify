# == Schema Information
#
# Table name: albums
#
#  id           :bigint(8)        not null, primary key
#  title        :string           not null
#  artist_id    :integer          not null
#  release_date :string
#  img_url      :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Album < ApplicationRecord
  validates :title, :artist_id, presence: true

  belongs_to :artist
  has_many :tracks
end
