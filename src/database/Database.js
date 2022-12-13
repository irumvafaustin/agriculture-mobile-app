import * as SQLite from 'expo-sqlite';

// connection database using Sqlite 
export const DatabaseConnection = {
  getConnection: () => SQLite.openDatabase("database.db"),
};