# semi-sentient-schoolmate
蝉・センティエント・スクールメート

User:
- has_many :decisions
- has_many :story_chapters, through: ...?
- Username
- Name
- Password
- Gender
- Default stats
- Progression (Chapter? Branch? Endings?)

Decision:
- Event
- Action/Response
- AttributeChange
- belongs_to :user
- belongs_to :story_chapter(?) / :story_branch(?)

StoryBranch(?):
- has_many :decisions
- belongs_to :story_chapter(?)

StoryChapter(?):
- has_many :story_branches
- has_many :decisions

Ending(?):
- has_many :chapters
- has_one (has_many) :story_branch(es) (?)
