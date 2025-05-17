import { supabase } from './supabase';

// Example functions to interact with the Supabase database

// Function to fetch data from a table
export async function fetchData(table: string, columns: string = '*', limit: number = 100) {
  const { data, error } = await supabase
    .from(table)
    .select(columns)
    .limit(limit);
  
  if (error) {
    console.error(`Error fetching data from table ${table}:`, error);
    throw error;
  }
  
  return data;
}

// Function to insert data into a table
export async function insertData(table: string, data: any) {
  const { data: result, error } = await supabase
    .from(table)
    .insert(data)
    .select();
  
  if (error) {
    console.error(`Error inserting data into table ${table}:`, error);
    throw error;
  }
  
  return result;
}

// Function to update data in a table
export async function updateData(table: string, id: string | number, data: any) {
  const { data: result, error } = await supabase
    .from(table)
    .update(data)
    .eq('id', id)
    .select();
  
  if (error) {
    console.error(`Error updating data in table ${table}:`, error);
    throw error;
  }
  
  return result;
}

// Function to delete data from a table
export async function deleteData(table: string, id: string | number) {
  const { error } = await supabase
    .from(table)
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error(`Error deleting data from table ${table}:`, error);
    throw error;
  }
  
  return true;
}

// Function to fetch data with filters
export async function fetchDataWithFilters(
  table: string, 
  columns: string = '*',
  filters: { column: string; operator: string; value: any }[] = []
) {
  let query = supabase.from(table).select(columns);
  
  // Apply filters
  filters.forEach(filter => {
    switch (filter.operator) {
      case 'eq':
        query = query.eq(filter.column, filter.value);
        break;
      case 'neq':
        query = query.neq(filter.column, filter.value);
        break;
      case 'gt':
        query = query.gt(filter.column, filter.value);
        break;
      case 'lt':
        query = query.lt(filter.column, filter.value);
        break;
      case 'gte':
        query = query.gte(filter.column, filter.value);
        break;
      case 'lte':
        query = query.lte(filter.column, filter.value);
        break;
      case 'like':
        query = query.like(filter.column, `%${filter.value}%`);
        break;
      default:
        break;
    }
  });
  
  const { data, error } = await query;
  
  if (error) {
    console.error(`Error fetching filtered data from table ${table}:`, error);
    throw error;
  }
  
  return data;
}
