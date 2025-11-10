import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ucgihehgqueyijdfqwbk.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjZ2loZWhncXVleWlqZGZxd2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3OTcyNzUsImV4cCI6MjA3ODM3MzI3NX0.Cg_Dp_kLoFSvBXllEuAMNrozJOwrXmq2A7bakT0YvSM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)