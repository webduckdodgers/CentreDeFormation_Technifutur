/*
Script de déploiement pour DB

Ce code a été généré par un outil.
La modification de ce fichier peut provoquer un comportement incorrect et sera perdue si
le code est régénéré.
*/

GO
SET ANSI_NULLS, ANSI_PADDING, ANSI_WARNINGS, ARITHABORT, CONCAT_NULL_YIELDS_NULL, QUOTED_IDENTIFIER ON;

SET NUMERIC_ROUNDABORT OFF;


GO
:setvar DatabaseName "DB"
:setvar DefaultFilePrefix "DB"
:setvar DefaultDataPath "C:\Program Files\Microsoft SQL Server\MSSQL16.DUCKSERVER\MSSQL\DATA\"
:setvar DefaultLogPath "C:\Program Files\Microsoft SQL Server\MSSQL16.DUCKSERVER\MSSQL\DATA\"

GO
:on error exit
GO
/*
Détectez le mode SQLCMD et désactivez l'exécution du script si le mode SQLCMD n'est pas pris en charge.
Pour réactiver le script une fois le mode SQLCMD activé, exécutez ce qui suit :
SET NOEXEC OFF; 
*/
:setvar __IsSqlCmdEnabled "True"
GO
IF N'$(__IsSqlCmdEnabled)' NOT LIKE N'True'
    BEGIN
        PRINT N'Le mode SQLCMD doit être activé de manière à pouvoir exécuter ce script.';
        SET NOEXEC ON;
    END


GO
USE [$(DatabaseName)];


GO
PRINT N'L''opération de refactorisation de changement de nom avec la clé 0d81a7bb-ffed-4e43-b33c-b8d280827ffb est ignorée, l''élément [dbo].[Library].[Users_Id] (SqlSimpleColumn) ne sera pas renommé en users_id';


GO
PRINT N'L''opération de refactorisation de changement de nom avec la clé 4337ee1d-f6fa-4333-a162-42065bda3495 est ignorée, l''élément [dbo].[myTable].[Email] (SqlSimpleColumn) ne sera pas renommé en email';


GO
PRINT N'L''opération de refactorisation de changement de nom avec la clé dc936e09-79fb-4dff-80fc-48c35e8d81a3 est ignorée, l''élément [dbo].[Games].[Cate] (SqlSimpleColumn) ne sera pas renommé en category';


GO
PRINT N'L''opération de refactorisation de changement de nom avec la clé ccbfba51-4f74-4e42-b0ac-e983103ed9bc est ignorée, l''élément [dbo].[Games].[Price] (SqlSimpleColumn) ne sera pas renommé en price';


GO
PRINT N'L''opération de refactorisation de changement de nom avec la clé c2ee4981-4e6d-4de2-8e62-52c56508ca80 est ignorée, l''élément [dbo].[myTable].[Country] (SqlSimpleColumn) ne sera pas renommé en country';


GO
PRINT N'L''opération de refactorisation de changement de nom avec la clé 40d401f7-6099-4b97-beb2-b138643a8e4b est ignorée, l''élément [dbo].[Library].[users_id] (SqlSimpleColumn) ne sera pas renommé en user_id';


GO
PRINT N'Création de Table [dbo].[Category]...';


GO
CREATE TABLE [dbo].[Category] (
    [Id]   INT        IDENTITY (1, 1) NOT NULL,
    [name] NCHAR (50) NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);


GO
PRINT N'Création de Table [dbo].[Games]...';


GO
CREATE TABLE [dbo].[Games] (
    [Id]          INT         IDENTITY (1, 1) NOT NULL,
    [name]        NCHAR (100) NOT NULL,
    [price]       FLOAT (53)  NOT NULL,
    [category_id] INT         NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);


GO
PRINT N'Création de Table [dbo].[Library]...';


GO
CREATE TABLE [dbo].[Library] (
    [user_id]         INT          NOT NULL,
    [game_id]         INT          NOT NULL,
    [number_of_hours] DECIMAL (18) NOT NULL
);


GO
PRINT N'Création de Table [dbo].[Users]...';


GO
CREATE TABLE [dbo].[Users] (
    [Id]       INT         NOT NULL,
    [nom]      NCHAR (100) NOT NULL,
    [prenom]   NCHAR (50)  NOT NULL,
    [email]    NCHAR (100) NOT NULL,
    [password] NCHAR (100) NOT NULL,
    [wallet]   FLOAT (53)  NOT NULL,
    [country]  CHAR (2)    NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);


GO
PRINT N'Création de Contrainte par défaut contrainte sans nom sur [dbo].[Users]...';


GO
ALTER TABLE [dbo].[Users]
    ADD DEFAULT 0 FOR [wallet];


GO
PRINT N'Création de Clé étrangère contrainte sans nom sur [dbo].[Games]...';


GO
ALTER TABLE [dbo].[Games] WITH NOCHECK
    ADD FOREIGN KEY ([category_id]) REFERENCES [dbo].[Category] ([Id]);


GO
PRINT N'Création de Clé étrangère [dbo].[PK_Library]...';


GO
ALTER TABLE [dbo].[Library] WITH NOCHECK
    ADD CONSTRAINT [PK_Library] FOREIGN KEY ([user_id]) REFERENCES [dbo].[Users] ([Id]);


GO
PRINT N'Création de Clé étrangère contrainte sans nom sur [dbo].[Library]...';


GO
ALTER TABLE [dbo].[Library] WITH NOCHECK
    ADD FOREIGN KEY ([game_id]) REFERENCES [dbo].[Games] ([Id]);


GO
-- Étape de refactorisation pour mettre à jour le serveur cible avec des journaux de transactions déployés

IF OBJECT_ID(N'dbo.__RefactorLog') IS NULL
BEGIN
    CREATE TABLE [dbo].[__RefactorLog] (OperationKey UNIQUEIDENTIFIER NOT NULL PRIMARY KEY)
    EXEC sp_addextendedproperty N'microsoft_database_tools_support', N'refactoring log', N'schema', N'dbo', N'table', N'__RefactorLog'
END
GO
IF NOT EXISTS (SELECT OperationKey FROM [dbo].[__RefactorLog] WHERE OperationKey = '0282a190-c0af-468b-bdb6-595621ee1f0f')
INSERT INTO [dbo].[__RefactorLog] (OperationKey) values ('0282a190-c0af-468b-bdb6-595621ee1f0f')
IF NOT EXISTS (SELECT OperationKey FROM [dbo].[__RefactorLog] WHERE OperationKey = 'b2f38b58-ed09-44c3-bdd5-d68b8231b746')
INSERT INTO [dbo].[__RefactorLog] (OperationKey) values ('b2f38b58-ed09-44c3-bdd5-d68b8231b746')
IF NOT EXISTS (SELECT OperationKey FROM [dbo].[__RefactorLog] WHERE OperationKey = '4337ee1d-f6fa-4333-a162-42065bda3495')
INSERT INTO [dbo].[__RefactorLog] (OperationKey) values ('4337ee1d-f6fa-4333-a162-42065bda3495')
IF NOT EXISTS (SELECT OperationKey FROM [dbo].[__RefactorLog] WHERE OperationKey = '9ea9c1bd-e529-40a2-afe7-fdf13eea52c5')
INSERT INTO [dbo].[__RefactorLog] (OperationKey) values ('9ea9c1bd-e529-40a2-afe7-fdf13eea52c5')
IF NOT EXISTS (SELECT OperationKey FROM [dbo].[__RefactorLog] WHERE OperationKey = 'eb4191d0-62db-4e43-b528-85c4f4d45951')
INSERT INTO [dbo].[__RefactorLog] (OperationKey) values ('eb4191d0-62db-4e43-b528-85c4f4d45951')
IF NOT EXISTS (SELECT OperationKey FROM [dbo].[__RefactorLog] WHERE OperationKey = 'dc936e09-79fb-4dff-80fc-48c35e8d81a3')
INSERT INTO [dbo].[__RefactorLog] (OperationKey) values ('dc936e09-79fb-4dff-80fc-48c35e8d81a3')
IF NOT EXISTS (SELECT OperationKey FROM [dbo].[__RefactorLog] WHERE OperationKey = 'ccbfba51-4f74-4e42-b0ac-e983103ed9bc')
INSERT INTO [dbo].[__RefactorLog] (OperationKey) values ('ccbfba51-4f74-4e42-b0ac-e983103ed9bc')
IF NOT EXISTS (SELECT OperationKey FROM [dbo].[__RefactorLog] WHERE OperationKey = 'c2ee4981-4e6d-4de2-8e62-52c56508ca80')
INSERT INTO [dbo].[__RefactorLog] (OperationKey) values ('c2ee4981-4e6d-4de2-8e62-52c56508ca80')
IF NOT EXISTS (SELECT OperationKey FROM [dbo].[__RefactorLog] WHERE OperationKey = '0d81a7bb-ffed-4e43-b33c-b8d280827ffb')
INSERT INTO [dbo].[__RefactorLog] (OperationKey) values ('0d81a7bb-ffed-4e43-b33c-b8d280827ffb')
IF NOT EXISTS (SELECT OperationKey FROM [dbo].[__RefactorLog] WHERE OperationKey = '40d401f7-6099-4b97-beb2-b138643a8e4b')
INSERT INTO [dbo].[__RefactorLog] (OperationKey) values ('40d401f7-6099-4b97-beb2-b138643a8e4b')

GO

GO
PRINT N'Vérification de données existantes par rapport aux nouvelles contraintes';


GO
USE [$(DatabaseName)];


GO
CREATE TABLE [#__checkStatus] (
    id           INT            IDENTITY (1, 1) PRIMARY KEY CLUSTERED,
    [Schema]     NVARCHAR (256),
    [Table]      NVARCHAR (256),
    [Constraint] NVARCHAR (256)
);

SET NOCOUNT ON;

DECLARE tableconstraintnames CURSOR LOCAL FORWARD_ONLY
    FOR SELECT SCHEMA_NAME([schema_id]),
               OBJECT_NAME([parent_object_id]),
               [name],
               0
        FROM   [sys].[objects]
        WHERE  [parent_object_id] IN (OBJECT_ID(N'dbo.Games'), OBJECT_ID(N'dbo.Library'))
               AND [type] IN (N'F', N'C')
                   AND [object_id] IN (SELECT [object_id]
                                       FROM   [sys].[check_constraints]
                                       WHERE  [is_not_trusted] <> 0
                                              AND [is_disabled] = 0
                                       UNION
                                       SELECT [object_id]
                                       FROM   [sys].[foreign_keys]
                                       WHERE  [is_not_trusted] <> 0
                                              AND [is_disabled] = 0);

DECLARE @schemaname AS NVARCHAR (256);

DECLARE @tablename AS NVARCHAR (256);

DECLARE @checkname AS NVARCHAR (256);

DECLARE @is_not_trusted AS INT;

DECLARE @statement AS NVARCHAR (1024);

BEGIN TRY
    OPEN tableconstraintnames;
    FETCH tableconstraintnames INTO @schemaname, @tablename, @checkname, @is_not_trusted;
    WHILE @@fetch_status = 0
        BEGIN
            PRINT N'Vérification de la contrainte : ' + @checkname + N' [' + @schemaname + N'].[' + @tablename + N']';
            SET @statement = N'ALTER TABLE [' + @schemaname + N'].[' + @tablename + N'] WITH ' + CASE @is_not_trusted WHEN 0 THEN N'CHECK' ELSE N'NOCHECK' END + N' CHECK CONSTRAINT [' + @checkname + N']';
            BEGIN TRY
                EXECUTE [sp_executesql] @statement;
            END TRY
            BEGIN CATCH
                INSERT  [#__checkStatus] ([Schema], [Table], [Constraint])
                VALUES                  (@schemaname, @tablename, @checkname);
            END CATCH
            FETCH tableconstraintnames INTO @schemaname, @tablename, @checkname, @is_not_trusted;
        END
END TRY
BEGIN CATCH
    PRINT ERROR_MESSAGE();
END CATCH

IF CURSOR_STATUS(N'LOCAL', N'tableconstraintnames') >= 0
    CLOSE tableconstraintnames;

IF CURSOR_STATUS(N'LOCAL', N'tableconstraintnames') = -1
    DEALLOCATE tableconstraintnames;

SELECT N'Échec de vérification de la contrainte :' + [Schema] + N'.' + [Table] + N',' + [Constraint]
FROM   [#__checkStatus];

IF @@ROWCOUNT > 0
    BEGIN
        DROP TABLE [#__checkStatus];
        RAISERROR (N'Une erreur s''est produite lors de la vérification des contraintes', 16, 127);
    END

SET NOCOUNT OFF;

DROP TABLE [#__checkStatus];


GO
PRINT N'Mise à jour terminée.';


GO
