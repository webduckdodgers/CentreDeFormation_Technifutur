﻿CREATE TABLE [dbo].[Users]
(
    [Id] INT NOT NULL PRIMARY KEY IDENTITY,
    [Email] VARCHAR(100) NOT NULL UNIQUE,
    [Password] VARCHAR(255) NOT NULL,
    [Wallet] MONEY NOT NULL,
    [Country] TINYINT
)