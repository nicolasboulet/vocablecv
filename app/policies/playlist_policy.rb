class PlaylistPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def index?
    record == user
  end

  def create?
    true
  end

  def index?
    true
  end

  def show?
    true
  end
end
