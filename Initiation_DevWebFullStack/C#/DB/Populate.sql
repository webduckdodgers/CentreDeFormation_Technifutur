SET IDENTITY_INSERT Users ON

INSERT INTO Users(Id, Email, Password, Wallet, Country)
VALUES
(1, 'user@user.com', 'Test123=', 120, NULL),
(2, 'admin@admin.com', 'Test123=', 99999, NULL),
(3, 'modo@modo.com', 'Test123=', 5000, NULL),
(4, 'poor@poor.com', 'Test123=', 0, NULL)

SET IDENTITY_INSERT Users OFF

SET IDENTITY_INSERT Categories ON

INSERT INTO Categories(Id, Name)
VALUES
(1, 'FPS'),
(2, 'RPG')

SET IDENTITY_INSERT Categories OFF

SET IDENTITY_INSERT Games ON

INSERT INTO Games(Id, Name, Price, CategoryId)
VALUES
(1, 'Counter-Strike 2', 14.99, 1),
(2, 'Skyrim', 19.99, 2)

SET IDENTITY_INSERT Games OFF


INSERT INTO User_Game(UserId, GameId)
VALUES
(1, 1),
(2, 1),
(2, 2),
(3, 2)