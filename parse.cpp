#include <fstream>
#include <iostream>
#include <sstream>

bool needsQuote(const std::string line, const int i) {
	
	char c = line.at(i);
	
	if (c == '"') {
		return false; //is STRING
	}
	else if (c == '{') {
		return false; //is OBJECT
	}
	else if (isdigit(c)) {
		return false; //is NUMBER
	}
	else if (c == 't' && line.find("true") != std::string::npos) {
		return false; //is TRUE
	}
	else if (c == 'f' && line.find("false") != std::string::npos) {
		return false; //is FALSE
	}
	else {
		return true;
	}
}

void addLeadingQuote(std::string &line, int start) {
	for (int i=start; i<line.length(); ++i) {
		if (!isspace(line.at(i))) {
			if (needsQuote(line,i)) {
				line.insert(i, "\"");
			}
			break;
		}
	}
}

void formatKeyValuePair(std::string &line) {
	line.insert(line.find(":"), "\"");
	addLeadingQuote(line, 0);
	if(needsQuote(line,line.find(":")+2)) {
		line.insert(line.find(":")+2, "\"");
		line.insert(line.length(), "\"");
	}
}

std::string outputMissingno() {
	return "{}";
}

//argc = argument count, number of arguments passed to the program
//argv = argument vector, one-dimensional array of args passed to program
int main(int argc, char* argv[]) {
	std::ifstream in;
	std::ofstream out;
	std::string line;
	std::string sep;

	
	std::cout << "Attempting to parse [" << argv[1] << "]" << std::endl;
	
	in.open(argv[1]);
	out.open(argv[2]);
	
	out << "{\n\"item_templates\": [" << std::endl;
	
	if (in.is_open()) {
		while (!in.eof()) {
			getline(in,line);
			if (line.find("{") != std::string::npos) { //begin object
				if (line.find("item_templates") != std::string::npos) {
					sep = "";
					out << "  {" << std::endl;
					continue;
				}
				else {
					line.insert(line.find("{")-1,"\":");
					addLeadingQuote(line,0);
					out << sep << "  " << line << std::endl;
					sep = "";
					continue;
				}
			}
			
			if (line == "" || line == "\n") {
				out << outputMissingno();
				continue;
			}
			
			if (line.find("timestamp_ms") != std::string::npos) {
				continue;
			}
			
			if (line.find("}") != std::string::npos) {
				if (line == "}") {
					out << std::endl << "  " << line << sep;
				}
				else {
					out << std::endl << "  " << line;					
				}
				continue;
			}
			else {
				if (line.find(":") != std::string::npos) {
					formatKeyValuePair(line);
				}
				out << sep << "  " << line;
				sep = ",\n";
			}
		}
	}
	
	out << "]}";
	
	in.close();
	out.close();
}
