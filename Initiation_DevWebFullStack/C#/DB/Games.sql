CREATE TABLE [dbo].[Games]
(
    [Id] INT NOT NULL PRIMARY KEY IDENTITY,
    [Name] VARCHAR(50) NOT NULL,
    Price MONEY NOT NULL,
    CategoryId INT REFERENCES Categories(Id)
)