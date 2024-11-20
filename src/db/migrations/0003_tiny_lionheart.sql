PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_queviures` (
	`id` text PRIMARY KEY NOT NULL,
	`nom` text NOT NULL,
	`data_creacio` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	`comprat` integer
);
--> statement-breakpoint
INSERT INTO `__new_queviures`("id", "nom", "data_creacio", "comprat") SELECT "id", "nom", "data_creacio", "comprat" FROM `queviures`;--> statement-breakpoint
DROP TABLE `queviures`;--> statement-breakpoint
ALTER TABLE `__new_queviures` RENAME TO `queviures`;--> statement-breakpoint
PRAGMA foreign_keys=ON;