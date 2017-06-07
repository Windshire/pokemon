#include <fstream>
#include <iostream>

void addLeadingQuote(string &line) {
	for (int i=0; i<line.length(); ++i) {
		if (!isspace(line.at(i))) {
			line.insert(i, "\"");
			break;
		}
	}
}

//argc = argument count, number of arguments passed to the program
//argv = argument vector, one-dimensional array of args passed to program
int main(int argc, char* argv[]) {
	std::ifstream in;
	std::ofstream out;
	std::string line;

	
	std::cout << "Attempting to parse [" << argv[1] << "]" << std::endl;
	
	in.open(argv[1]);
	out.open(argv[2]);
	
	if (in.is_open()) {
		while (!in.eof()) {
			getline(in,line);
			if (line.find("{") != std::string::npos) {
				if (line.find("item_templates") != std::string::npos) {
					out << "{" << std::endl;
					continue;
				}
				else {
					line.insert(line.find("{")-1,"\":");
					out << line << std::endl;
					continue;
				}
			}
			else if (line.find("}") != std::string::npos) {
				out << line << std::endl;
				continue;
			}
			if (line.find(":") != std::string::npos) {
				line.insert(line.find(":"), "\"");
				addLeadingQuote(line);
			}
				
			out << line << "," << std::endl;
			
		}
	}
	
	
	in.close();
	out.close();
}
