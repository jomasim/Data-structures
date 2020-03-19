const expand = (s, begin, end) => {
    while(begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
      begin--
      end++
    }
    return s.substring(begin + 1, end)
  }

  console.log(expand("babad",3,3));