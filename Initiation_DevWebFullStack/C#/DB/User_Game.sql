CREATE TABLE [dbo].[User_Game]
(
    UserId INT REFERENCES Users(Id),
    GameId INT REFERENCES Games(Id),
    [TimePlayed] INT NOT NULL DEFAULT 0,
    CONSTRAINT PK_user_game PRIMARY KEY (UserId, GameId)
)