import os
import sys
from pathlib import Path

class SommaFileGenerator:
    def __init__(self):
        self.output_file = "somma_project_files.txt"
        self.file_count = 0
        self.skipped_files = 0
        self.processed_files = []
        
    def get_all_files(self):
        """Get all project files to process"""
        files_to_process = []
        
        # Define patterns for files to include
        include_patterns = [
            '*.tsx', '*.ts', '*.js', '*.jsx',
            '*.css', '*.json', '*.md', '*.html',
            '*.txt', '*.config.js', '*.config.ts',
            '*.svg', 'vite.config.ts', 'tailwind.config.ts'
        ]
        
        # Files to exclude
        exclude_files = ['package-lock.json', 'Somma Modern Greek Menu.pdf']
        exclude_extensions = ['.png', '.jpg', '.jpeg', '.gif', '.ico', '.pdf']
        
        for root, dirs, files in os.walk('.'):
            # Skip node_modules
            if 'node_modules' in root:
                continue
                
            # Don't traverse into node_modules
            dirs[:] = [d for d in dirs if d != 'node_modules']
            
            for file in files:
                file_path = Path(root) / file
                rel_path = file_path.relative_to('.')
                
                # Skip excluded files
                if file in exclude_files:
                    self.skipped_files += 1
                    continue
                    
                # Skip excluded extensions
                if file_path.suffix in exclude_extensions:
                    self.skipped_files += 1
                    continue
                    
                files_to_process.append(str(rel_path))
        
        # Sort files for consistent output
        files_to_process.sort()
        return files_to_process
    
    def read_file(self, file_path):
        """Read file with multiple encoding attempts"""
        encodings = ['utf-8', 'latin-1', 'utf-16', 'iso-8859-1', 'cp1252']
        
        for encoding in encodings:
            try:
                with open(file_path, 'r', encoding=encoding) as f:
                    return f.read()
            except (UnicodeDecodeError, UnicodeError):
                continue
            except Exception as e:
                return f"<ERROR READING FILE: {str(e)}>"
        
        return "<COULD NOT READ FILE WITH ANY ENCODING>"
    
    def generate(self):
        """Generate the complete project file"""
        print("🔄 Scanning Somma project...\n")
        
        # Get all files to process
        all_files = self.get_all_files()
        
        with open(self.output_file, 'w', encoding='utf-8') as outfile:
            for rel_path in all_files:
                file_path = Path(rel_path)
                
                # Read file content
                content = self.read_file(file_path)
                
                # Write to output
                outfile.write(f"My {rel_path}:\n\n")
                outfile.write('"' + '\n')
                outfile.write(content)
                
                # Add newline if content doesn't end with one
                if content and not content.endswith('\n'):
                    outfile.write('\n')
                    
                outfile.write('"\n\n')
                
                self.file_count += 1
                self.processed_files.append(rel_path)
                
                # Show progress
                print(f"✓ {rel_path}")
        
        self.print_summary()
    
    def print_summary(self):
        """Print detailed summary"""
        print(f"\n{'='*60}")
        print(f"🎉 SOMMA PROJECT FILES GENERATED")
        print(f"{'='*60}")
        print(f"📁 Output file: {self.output_file}")
        print(f"📊 Statistics:")
        print(f"   • Files processed: {self.file_count}")
        print(f"   • Files skipped: {self.skipped_files}")
        print(f"   • Total files found: {self.file_count + self.skipped_files}")
        
        print(f"\n📋 File categories processed:")
        
        # Count by directory
        dir_counts = {}
        for file in self.processed_files:
            dir_name = os.path.dirname(file) or '(root)'
            dir_counts[dir_name] = dir_counts.get(dir_name, 0) + 1
        
        print(f"\n📂 Directory breakdown:")
        for dir_name, count in sorted(dir_counts.items()):
            indent = "  " * (dir_name.count('/') + 1)
            print(f"{indent}• {dir_name}/: {count} files")
        
        print(f"\n📄 File type breakdown:")
        ext_counts = {}
        for file in self.processed_files:
            ext = Path(file).suffix.lower() or '(no extension)'
            ext_counts[ext] = ext_counts.get(ext, 0) + 1
        
        for ext, count in sorted(ext_counts.items()):
            print(f"   • {ext or '(none)'}: {count} files")
        
        print(f"\n⛔ Excluded items:")
        print("   • node_modules/ directory")
        print("   • package-lock.json")
        print("   • Binary files (.png, .pdf)")
        print("   • Somma Modern Greek Menu.pdf")
        
        print(f"\n💾 File size: {os.path.getsize(self.output_file):,} bytes")
        
        # Show first few files as preview
        print(f"\n🔍 First 5 files included:")
        for i, file in enumerate(self.processed_files[:5], 1):
            print(f"   {i}. {file}")
        
        if len(self.processed_files) > 5:
            print(f"   ... and {len(self.processed_files) - 5} more files")

def main():
    """Main execution function"""
    # Check if we're in the right directory
    current_dir = Path('.')
    
    # Look for signs of Somma project
    somma_files = ['src', 'public', 'package.json', 'vite.config.ts']
    if not all((current_dir / file).exists() for file in somma_files[:3]):
        print("⚠️  Warning: This doesn't look like the Somma project root.")
        print("   Make sure you're running this from the 'somma' directory.")
        response = input("   Continue anyway? (y/N): ")
        if response.lower() != 'y':
            print("Exiting...")
            return
    
    try:
        generator = SommaFileGenerator()
        generator.generate()
    except KeyboardInterrupt:
        print("\n\n⏹️  Generation cancelled by user.")
    except Exception as e:
        print(f"\n❌ Error: {e}")

if __name__ == "__main__":
    main()